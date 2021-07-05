package sectionA;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.IntStream;

public class SectionA {

	public static int maxArrayValue(int[] arr) {
		return maxArrayValue(arr, 0);
	}
	public static int maxArrayValue(int[] arr, int index) {
		if (arr.length == 0)
			throw new Error("Input a non-empty array");
		if(index<arr.length-1) {
			int current = arr[index];
			int rest = maxArrayValue(arr, index+1);
			return current > rest ? current : rest;
		}
		return arr[index];
	}

	public static void numTo100() {
		numTo100(1);
	}
	public static void numTo100(int step) {
		try {
			System.out.println(step);
			int test = 1/(100-step);
			numTo100(step+1);
		} catch(Exception e) {
			return;
		}
	}

	public static int greatestArea(int[][] areaSet) {
		int greatest = 0;
		int fused[] = new int[areaSet.length > 0 ? areaSet[0].length : 0];
		for (int i = 0; i < areaSet.length; ++i) {
			int row[] = areaSet[i];
			for (int j = 0; j < row.length; ++j) {
				int col = row[j];
				if (col != 0) {
					fused[j] += col;
				} else
					fused[j] = 0;
			}
			HashMap<Integer, Integer> areas = new HashMap<Integer, Integer>();
			int area = 0;
			for (int j = 0; j < fused.length; ++j) {
				int col = fused[j];
				if (col != 0) {
					if (areas.size() == 0) {
						areas.put(col, 1);
						area = col;
						continue;
					}
					if (areas.containsKey(col)) {
						Iterator<Entry<Integer, Integer>> itAreas = areas.entrySet().iterator();
						while (itAreas.hasNext()) {
							Entry<Integer, Integer> entry = (Entry<Integer, Integer>) itAreas.next();
							int entryKey = entry.getKey();
							int entryValue = entry.getValue();
							int entryArea = entryKey * entryValue;
							if (col >= entryKey) {
								area = area < (entryValue + 1) * entryKey ? (entryValue + 1) * entryKey : area;
								areas.put(entryKey, entryValue + 1);
								continue;
							} else if (area < entryArea) {
								area = entryArea;
							}
							areas.remove(entryKey);
						}
					} else {
						int largest = 0;
						Iterator<Entry<Integer, Integer>> itAreas = areas.entrySet().iterator();
						while (itAreas.hasNext()) {
							Entry<Integer, Integer> entry = (Entry<Integer, Integer>) itAreas.next();
							int entryKey = entry.getKey();
							int entryValue = entry.getValue();
							int entryArea = entryKey * entryValue;
							if (col >= entryKey) {
								area = area < (entryValue + 1) * entryKey ? (entryValue + 1) * entryKey : area;
								areas.put(entryKey, entryValue + 1);
								continue;
							} else if (area < entryArea) {
								area = entryArea;
							}
							if (entryValue > largest)
								largest = entryValue;
							areas.remove(entryKey);
							areas.put(col, largest + 1);
							area = area < (largest + 1) * col ? (largest + 1) * col : area;
						}
					}
				} else {
					areas.clear();
				}
			}
			greatest = greatest < area ? area : greatest;
		}
		return greatest;
	}

	public static int groupOnes(int[][] matrix) {
		int last = 0;
		int[] prev = new int[matrix[0].length];
		Map<Integer, Integer> leftChanges = new HashMap<Integer, Integer>();
		for (int i = 0; i < matrix.length; ++i) {
			int[] row = matrix[i], fused = prev;
			for (int j = 0; j < row.length; ++j) {
				int col = row[j];
				if (col != 0) {
					int topCol = leftChanges.containsKey(prev[j]) ? leftChanges.get(prev[j]) : prev[j],
							leftCol = fused.length == 0 || j - 1 < 0 ? 0
									: leftChanges.containsKey(fused[j - 1]) ? leftChanges.get(fused[j - 1])
											: fused[j - 1];
					if (topCol == 0) {
						if (leftCol == 0) {
							fused[j] = ++last;
							continue;
						}
						fused[j] = leftCol;
						continue;
					} else {
						if (leftCol == 0) {
							fused[j] = topCol;
							continue;
						}
						int min = Math.min(topCol, leftCol);
						if (topCol != leftCol)
							leftChanges.put(Math.max(topCol, leftCol), min);
						fused[j] = min;
						continue;
					}
				}
				fused[j] = col;
			}
			prev = fused;
		}
		return last - leftChanges.size();
	}

	static int[][] rotateMatrix(int[][] matrix) {
		int[][] rotated = new int[matrix[0].length][matrix.length];
		for (int i = 0; i < matrix.length; ++i) {
			int[] row = matrix[i];
			int rotIndexJ = i;
			for (int j = 0; j < row.length; ++j) {
				int col = row[j], rotIndexI = row.length - 1 - j;
				rotated[rotIndexI][rotIndexJ] = col;
			}
		}
		return rotated;
	}

	static int[] mergeArray(int[] first, int[] second) {
		int pointer, merged;
		pointer = merged = 0;
		while (merged < second.length) {
			int fLast = first.length - second.length - 1 - pointer + merged > -1
					? first[first.length - second.length - 1 - pointer + merged]
					: Integer.MIN_VALUE, sLast = second[second.length - 1 - merged],
					lastPosition = first.length - 1 - pointer;
			if (fLast > sLast) {
				first[lastPosition] = fLast;
			} else {
				first[lastPosition] = sLast;
				++merged;
			}
			++pointer;
		}
		return first;
	}

	static int[][] zeroMatrix(int[][] matrix) {
		HashSet<Integer> zeroColumn = new HashSet<>();
		int[][] zeroMatrix = new int[matrix.length][matrix[0].length];
		for (int i = 0; i < matrix.length; ++i) {
			int[] row = matrix[i];
			boolean zeroRow = false;
			for (int j = 0; j < row.length; ++j) {
				int col = row[j];
				if (col == 0) {
					zeroRow = true;
					zeroColumn.add(j);
				}
			}
			if (zeroRow) {
				zeroMatrix[i] = new int[row.length];
			} else {
				zeroMatrix[i] = row;
			}
		}
		int[] zeroColValues = zeroColumn.stream().mapToInt(Integer::intValue).toArray();
		if (zeroColumn.size() > 0) {
			for (int i = 0; i < zeroMatrix.length; ++i) {
				if (!zeroColumn.contains(i)) {
					int[] row = zeroMatrix[i];
					for (int j = 0; j < zeroColValues.length; ++j) {
						int zeroCol = zeroColValues[j];
						row[zeroCol] = 0;
					}
				}
			}
		}
		return zeroMatrix;
	}

	static int[] sumArray(int[] first, int[] second) {
		int largestLength = first.length > second.length ? first.length : second.length, index = 0, add1 = 0, add2 = 0,
				extra = 0;
		LinkedList<Integer> totalList = new LinkedList<>();
		while (index < largestLength) {
			if ((index < first.length && Math.floor(first[index] / 10) != 0)
					|| (index < second.length && Math.floor(second[index] / 10) != 0))
				throw new Error("Input a single-digit array");
			add1 = (int) (first.length > index ? first[index] : 0);
			add2 = (int) (second.length > index ? second[index] : 0);
			int sum = add1 + add2 + extra;
			totalList.addFirst(sum % 10);
			extra = Math.floorDiv(sum, 10);
			++index;
		}
		if (extra > 0)
			totalList.addFirst(extra);
		return totalList.stream().mapToInt(Integer::intValue).toArray();
	}
	
	static int[] swapArrayPos(int[] arr) {
		int[] swaped = new int[arr.length];
		for(int i=0; i<arr.length; ++i) {
			int num = arr[i];
			if(num < 0 || num > arr.length-1) throw new Error("Input a proper array");
			swaped[i] = arr[num];
		}
		return swaped;
	}
	
	static int[]  shuffleArray(int[] arr) {
		int[] shuffled = new int[arr.length];
		for(int i=0; i<arr.length; ++i) {
			int random = (int) Math.ceil(Math.random()*(arr.length-1));
			int temp = shuffled[i] !=0 ? shuffled[i] : arr[i];
			shuffled[random] = shuffled[random] !=0 ? shuffled[random] : arr[random];
			shuffled[i] = shuffled[random];
			shuffled[random] = temp;
		}
		return shuffled;
	}
}
