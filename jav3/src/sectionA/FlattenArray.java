package sectionA;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Stack;
import java.util.stream.Collectors;

public class FlattenArray {

	static int[] recursiveMode(Object[] arr) {
		LinkedList<Integer> flatten = new LinkedList<>();
		for (int i = 0; i < arr.length; ++i) {
			if (arr[i].getClass().isArray()) {
				int[] recursed = recursiveMode((Object[]) arr[i]);
				LinkedList<Integer> rest = new LinkedList<>();
				for (int n : recursed) {
					rest.add(n);
				}
				flatten.addAll(rest);
			} else {
				flatten.add((Integer) arr[i]);
			}
		}
		return flatten.stream().mapToInt(Integer::intValue).toArray();
	}

	static int[] iterativeMode(Object[] arr) {
		LinkedList<Integer> flatten = new LinkedList<>();
		int index = 0;
		Stack<StPoint> stack = new Stack<>();
		while (!stack.isEmpty() || index < arr.length) {
			int point;
			if (stack.isEmpty()) {
				if (arr[index].getClass().isArray()) {
					stack.push(new StPoint((Object[]) arr[index], 0));
				} else {
					point = (int) arr[index];
					flatten.add(point);
				}
				++index;
			} else {
				StPoint lastPoint = stack.lastElement();
				int lastIndex = lastPoint.position;
				Object[] subArray = lastPoint.value;
				if (lastPoint.getPoint().getClass().isArray()) {
					stack.push(new StPoint((Object[]) lastPoint.getPoint(), 0));
				} else {
					point = (int) lastPoint.getPoint();
					flatten.add(point);
				}
				if (lastIndex == subArray.length - 1) {
					stack.pop();
				} else {
					lastPoint.add1Position();
				}
			}
		}
		return flatten.stream().mapToInt(Integer::intValue).toArray();
	}

	static class StPoint {

		private Object[] value;
		private int position;

		StPoint(Object[] value, int position) {
			this.value = value;
			this.position = position;
		}

		public Object[] getValue() {
			return value;
		}

		public int getPosition() {
			return position;
		}

		public void add1Position() {
			++position;
		}

		public Object getPoint() {
			return value[position];
		}
	}
}
