package sectionA;

import java.util.Arrays;
import java.util.stream.IntStream;

public class SectionA {
	
	
	
	
	public static int maxArrayValue(int[] arr) {
		if(arr.length == 0) throw new Error("Input a non-empty array");
		IntStream stream = Arrays.stream(arr);
		return stream.reduce(Integer.MIN_VALUE, (prev, current)->prev > current ? prev : current);
	}
	
	public static void numTo100() {
		int[] values = new int[100];
		IntStream stream = Arrays.stream(values);
		
		stream.reduce(1, (acc, current)->{
			System.out.println(acc);
			return ++acc;
		});
	}
}
