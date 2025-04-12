# davaleba 1
greet = lambda name: f"Hello {name}!"
print(greet("Name"))  # დაბეჭდავს: Hello Name!


# davaleba 2
numbers = [1, 2, 3, 4, 5]
result = list(map(lambda x: x * 2, numbers))
print(result)



# davaleba 3
listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]

# მხოლოდ 5-ის ჯერადების გაფილტვრა
result = list(filter(lambda x: isinstance(x, int) and x % 5 == 0, listn))

print(result)


# davaleba 4
setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
print(setn)
