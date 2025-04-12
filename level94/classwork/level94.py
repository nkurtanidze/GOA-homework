# davaleba 1
numbers = [10, 12, 24, 33, 48, 50, 60, 77, 84, 90]

# filter-ის გამოყენება
divisible_by_12 = list(filter(lambda x: x % 12 == 0, numbers))

print(divisible_by_12)
