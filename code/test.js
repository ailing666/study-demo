function add (a, b) {
  return a + b
}
test('测试1+1', () => {
  expect(add(1, 2)).toBe(3)
})
