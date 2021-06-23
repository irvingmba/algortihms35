package sectionA;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;
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
	
	public static int greatestArea(int[][] areaSet) {
		int greatest = 0;
		int fused[] = new int[areaSet.length > 0 ? areaSet[0].length : 0];
		for(int i=0; i<areaSet.length; ++i) {
			int row[] = areaSet[i];
			for(int j=0; j<row.length; ++j) {
				int col = row[j];
				if(col != 0) {
					fused[j] += col;
				} else fused[j] = 0;
			}
			HashMap<Integer, Integer> areas = new HashMap<Integer, Integer>();
			int area = 0;
			for(int j=0; j<fused.length; ++j) {
				int col = fused[j];
				if(col != 0) {
					if(areas.size() == 0) {
						areas.put(col, 1);
						area = col;
						continue;
					}
					if(areas.containsKey(col)) {
						Iterator<Entry<Integer, Integer>> itAreas = areas.entrySet().iterator();
						while(itAreas.hasNext()) {
							Entry<Integer,Integer> entry = (Entry) itAreas.next();
							if(col >= entry.getKey()) {
								area = area < (entry.getValue()+1)*entry.getKey() ? (entry.getValue()+1)*entry.getKey() : area;
								areas.put(entry.getKey(), entry.getValue()+1);
							}
						}
					}
				}
			}
		}
		
	}
}
