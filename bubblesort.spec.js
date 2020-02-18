describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(bubbleSort, swap).and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of numbers', function() {
    expect(bubbleSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('calls swap three times i think lol', function() {
    bubbleSort([1, 3, 5, 2, 4]);
    expect(swap.calls.count()).toEqual(3);
  });
});
