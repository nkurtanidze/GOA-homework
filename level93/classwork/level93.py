# davaleba 1
nasty_division = lambda x: int(x / 2)
print(nasty_division(10))  # გამოდის 5


# davaleba 2
# შექმენით set სხვადასხვა ტიპის მონაცემებით
my_set = {1, "Hello", 3.14, True, (1, 2), 42}

# დაამატეთ True და 1
my_set.add(True)
my_set.add(1)

# დაათვალიერეთ set-ის შინაარსი
print(my_set)




# davaleba 3
# Dictionary შექმნა
person = {
    'name': 'nika',
    'lastname': 'kurtanidze',
    'age': 16
}

# Key-ის მნიშვნელობების გამოტანა
print(f"Name: {person['name']}")
print(f"Lastname: {person['lastname']}")
print(f"Age: {person['age']}")



# davaleba 4
# ლისტი, რომელსაც გადავუვლით
numbers = [1, 2, 3]

# map-ის გამოყენება თითოეული ელემენტის გაორმაგებისათვის
doubled_numbers = list(map(lambda x: x * 2, numbers))

# შედეგი
print(doubled_numbers)



# davaleba 5
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = list(filter(lambda x: x % 3 == 0, numbers))
print(result)



# davaleba 6
# სიას შევქმნით
numbers = [5, 12, 18, 7, 25]

# filter და lambda დავაყენოთ
filtered_numbers = list(filter(lambda x: x > 10, numbers))

print(filtered_numbers)



# davaleba 7
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
addition_ten = list(map(lambda x: x + 10, numbers))
print(addition_ten)



# davaleba 8
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
odd_numbers = list(filter(lambda x: x % 2 == 1, numbers))
print(odd_numbers)



# davaleba 9
from functools import reduce

# სია რიცხვების
numbers = [1, 2, 3, 4, 5]

# reduce() ფუნქციის გამოყენებით ჯამის გამოთვლა
sum_of_numbers = reduce(lambda x, y: x + y, numbers)

print("რიცხვების ჯამი:", sum_of_numbers)
