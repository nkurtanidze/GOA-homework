# 1. Write a function that takes a list of numbers and returns the sum of all the even numbers.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
def number(x):
    even_sum = 0
    for i in (x):
        if i % 2 == 0:
          even_sum += i
    print(even_sum)

number(numbers)


# 2. Create a function that accepts a string and returns the string reversed without using any built-in reverse functions.
def reversed_string(string):
    print(string[::-1])
reversed_string("nika")


# 3. Implement a function that takes a number and returns the factorial of that number using recursion.
def fact(n):
    if n == 1:
        return 1
    return fact(n - 1) * n

print(fact(5))


# 4. Design a function that accepts two lists and returns a list of common elements without using set operations.
num1 = [1, 2, 3, 4, 5]
num2 = [3, 5, 7, 9]
def comon_nums(list1, list2):
    result = []
    for i in list1:
       for j in list2:
           print(f"i {i} j {j}")
           if i == j:
               result.append(i)
    print(result)
comon_nums(num1, num2)


# 5. Write a function that takes a string and returns the number of vowels in the string.
vowels = ["a", "e", "u", "o", "i"]
string = "nika"
def vowels_in_string(vowelss, name):
    count = 0
    for i in name:
        for j in vowels:
            if i == j:
                count += 1
    print(count)
vowels_in_string(vowels, string)


# 6. Create a function that accepts a list of integers and returns the list sorted in ascending order without using built-in sort functions.
def manual_sort(int_list):
    for i in range(len(int_list)):
        for x in range(i):
            if int_list[x] > int_list[i]:
                smaller = int_list[i]
                bigger = int_list[x]
                int_list[i] = bigger
                int_list[x] = smaller

    
    return int_list

print(manual_sort([10, 14, 20, 12, 11, 3, 4, 1, 23]))


# 7. Implement a function that takes two strings and returns True if one string is a permutation of the other.
name = "nika"
names = "kian"
def permutation(name, names):
    count = 0
    for i in name:
         for j in names:
              if i == j:
                   count += 1
    if count == len(name) and len(names) == len(name):
         print(True)
    else:
         print(False)
        
permutation(name, names)


# 8. Create a function that takes a number and returns True if it is a prime number.
def prime_number(x):
    if x <= 1:
        print(False)
    for i in range(2, int((x ** 0.5)) + 1):
            if x % i == 0:
                return False
            else:
                return True
print(prime_number(17))


# 9. Design a function that accepts a list of strings and returns a list with the strings sorted by their lengths.
string = ["nika", "gio", "lukaa"]
def names(list):
    print(sorted(list, key=len))
names(string)