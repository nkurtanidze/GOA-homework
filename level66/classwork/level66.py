def filter_even_numbers(matrix):
    return [[num for num in row if num % 2 == 0] for row in matrix]
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

result = filter_even_numbers(matrix)
print(result)  # [[2, 4], [6, 8], [10, 12]]
