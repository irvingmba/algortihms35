package sectionA;

import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Objects;

public class RouteFinder {

	private int[][] matrix;
	private int[] start;
	private int[] end;

	RouteFinder(int[][] matrix) {
		this(matrix, null, null);
	}

	RouteFinder(int[][] matrix, int[] start, int[] end) {
		this.matrix = matrix;
		this.start = start;
		this.end = end;
	}

	public int[] getStart() {
		return start;
	}

	public void setStart(int[] start) {
		this.start = start;
	}

	public int[] getEnd() {
		return end;
	}

	public void setEnd(int[] end) {
		this.end = end;
	}

//	public int[][] findRoutes(int[] start, int[] end) throws IOException {
//		if (!areValidPoints(start, end))
//			throw new IOException("Start or end point are not within a valid range");
//		if (hasRoutes(start, end)) {
//			return traverseRoutes(start, end);
//		} else {
//			return null;
//		}
//
//	}

	private boolean areValidPoints(int[] start, int[] end) {
		if (start.length != 2 || end.length != 2)
			return false;
		int startX = start[0], startY = start[1], endX = end[0], endY = end[1];
		return startX < matrix[0].length && endX < matrix[0].length && startY < matrix.length && endY < matrix.length
				&& startX > -1 && startY > -1 && endX > 1 && endY > -1;
	}

	private boolean hasRoutes(int[] point, int[] end) {
		int pointX = point[0], pointY = point[1], endX = end[0], endY = end[1];
		return !(pointX == endX && pointY == endY) && pointX <= endX && pointY <= endY;
	}

//	private String[][] traverseRoutes(int[] point, int[] end, LinkedList<String> acc) {
//		int pointX = point[0], pointY = point[1], endX = end[0], endY = end[1];
//		if (pointX == endX && pointY == endY) {
//			String[][] result = new String[][] { (String[]) acc.toArray() };
//			return result;
//		}
//		LinkedList<String[][]> routes = new LinkedList(),
//				rigth = pointX < endX ? traverseRoutes(new int[] { pointX + 1, pointY }, end, acc.add("r")) : null,
//				down = pointY < endY ? traverseRoutes(new int[] { pointX, pointY + 1 }, end, acc.add("d")) : null;
//		if(Objects.isNull(rigth)) routes.addAll(Arrays.asList(rigth));
//		if(Objects.isNull(down)) routes.addAll(down);
//	}

}
