import { add } from "./math";


describe("", () => {
        test("1 + 1 should equal 2", () => {
			expect(add(1, 1)).toBe(2);
		});

		test("1 + 2 should equal 3", () => {
			expect(add(1, 2)).toBe(3);
		});
		
})

// test.each([1, 1, 2], [1, 2, 3])("addition should works", (a, b, c) => {
//         expect(add(a, b)).toBe(c);
// })

// test("1 + 1 should equal 2", () => {
//         expect(add(1, 1)).toBe(2);
// });

// .only() will run only this test
// .skip() will skip this test
// .todo() will mark this test as todo
// .each() excution du meme test avec differents parametres