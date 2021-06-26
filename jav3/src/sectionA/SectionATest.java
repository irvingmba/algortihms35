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

}
