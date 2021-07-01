package sectionA;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class SectionATest {

	private final PrintStream standardOut = System.out;
	private final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();

	@BeforeEach
	public void setUp() {
		System.setOut(new PrintStream(outputStreamCaptor));
	}

	@AfterEach
	public void tearDown() {
		System.setOut(standardOut);
	}

	@Test
	void testMaxArrayValue() {
		int[] values = new int[] { 1, 5, 3, 7, 5, 10 };
		int max = SectionA.maxArrayValue(values);
		assertEquals(max, 10);
	}

	@Test
	void testNumTo100() {
		SectionA.numTo100();
		String response = "";
		for (int i = 0; i < 100; ++i) {
			response += i + 1 + "\n";
		}
		assertEquals(response, outputStreamCaptor.toString());
	}

	@Test
	void testGreatestArea() {
		int case1[][] = new int[][] { { 0, 1, 1 }, { 0, 1, 1 }, { 1, 1, 0 } };
		int case4[][] = new int[][] { { 1, 1, 0, 0, 1 }, { 1, 1, 0, 1, 0 }, { 1, 1, 1, 1, 1 }, { 0, 1, 1, 0, 1 },
				{ 1, 0, 1, 1, 1 } };
		assertEquals(SectionA.greatestArea(case1), 4);
		assertEquals(SectionA.greatestArea(case4), 6);
	}

	@Test
	void testGroupOnes() {
		int simpleCase[][] = new int[][] { { 1, 1, 0, 1 }, { 1, 1, 0, 0 }, { 1, 0, 0, 1 }, { 0, 0, 1, 1 },
				{ 0, 0, 1, 1 } };
		assertEquals(SectionA.groupOnes(simpleCase), 3);
	}

	@Test
	void testRotateMatrix() {
		int[][] sample1 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } },
				expected = { { 3, 6, 9 }, { 2, 5, 8 }, { 1, 4, 7 } };
		assertArrayEquals(SectionA.rotateMatrix(sample1), expected);
	}

	@Test
	void testMergeArray() {
		int[] sample1A = new int[6], sample1B = new int[] { 100, 200, 300 };
		sample1A[0] = 10;
		sample1A[1] = 20;
		sample1A[2] = 30;
		assertArrayEquals(SectionA.mergeArray(sample1A, sample1B), new int[] { 10, 20, 30, 100, 200, 300 });

		int[] sample2A = new int[6], sample2B = new int[] { 5, 15, 25 };
		sample2A[0] = 10;
		sample2A[1] = 20;
		sample2A[2] = 30;
		assertArrayEquals(SectionA.mergeArray(sample2A, sample2B), new int[] { 5, 10, 15, 20, 25, 30 });
	}

	@Test
	void testZeroMatrix() {
		int[][] sample1 = new int[][] { { 1, 1, 0 }, { 1, 1, 1 }, { 0, 1, 1 } };
		assertArrayEquals(SectionA.zeroMatrix(sample1), new int[][] { { 0, 0, 0 }, { 0, 1, 0 }, { 0, 0, 0 } });
		int[][] sample2 = new int[][] { { 1, 1, 1, 1, 1 }, { 1, 1, 1, 0, 1 }, { 1, 1, 1, 1, 1 }, { 1, 0, 1, 1, 1 },
				{ 1, 1, 1, 1, 1 } };
		assertArrayEquals(SectionA.zeroMatrix(sample2), new int[][] { { 1, 0, 1, 0, 1 }, { 0, 0, 0, 0, 0 },
				{ 1, 0, 1, 0, 1 }, { 0, 0, 0, 0, 0 }, { 1, 0, 1, 0, 1 } });
	}

}
