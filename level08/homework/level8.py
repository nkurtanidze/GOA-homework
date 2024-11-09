# დავალება 2

num = 5

print(True and True)  # True  ეს იმიტომ არის სწორი რომ სწორი და სწორი იქნება სიმართლე
print(True and False) # False ეს იმიტომ არის არასწორი რომ სწორი და არასწორი იქნება არასწორი
print(False and True) # False ეს იმიტომ არის არასწორი რომ არასწორი და სწორიც იქნება არასწორი
print(False and False) # False  ეს იმიტომ არის არასწორი რომ არასწორი და არასწორი იქნება არასწორი

print(True or True)  # True ეს იმიტომ არის სწორი რომ თუ ერთი მაინც არის სწორი იქნება სწორი
print(True or False) # True ეს იმიტომ არის სწორი რომ თუ ერთი მაინც არის სწორი იქნება სწორი
print(False or True) # True ეს იმიტომ არის სწორი რომ თუ ერთი მაინც არის სწორი იქნება სწორი
print(False or False) # False ეს იმიტომ არის არასწორი რადგან ორივე არის არასწორი

print("_ _ _ _ AND _ _ _ _ _ ")

print(num >= 1 and num <= 10) # True სწორია რადგან და ცვლადში ორივე მოთხოვნილება უნდა შეასრულოს
print(num >= 1 and num <= 4)  # False არასწორია რადგან ორივე მოთხოვნილებას არ ასრულებს
print(num > 5 and num <= 10)  # False არასწორია რადგან ორივე მოთხოვნილებას არ ასრულებს
print(num > 5 and num > 10)   #False არასწორია რადგან ორივე მოთხოვნილებას არ ასრულებს


print("_ _ _ _ _ OR _ _ _ _ _")

print(num >= 1 or num <= 10) # True სწორია რადგან ორივეს ასრულებს
print(num >= 1 or num <= 4)  # True სწორია რადგან ერთ-ერთს მაინც ასრულებს
print(num > 5 or num <= 10)  # True სწორია რადგან ერთ-ერთს მაინც ასრულებს
print(num > 5 or num > 10)   # False არასწორია რადგან არცერთს არ ასრულებს


# დავალება 3

# AND ოპერატორი აბრუნებს True-ს თუ ორივე პირობა სწორია და False-ს აბრუნებს თუ ერთ-ერთი პირობა არასწორია
# OR ოპერატორი აბრუნებს True-ს თუ ერთ-ერთი პირობა მაინც არის სწორი და False-ს აბრუნებს როცა ორივე პირობა არასწორია

# დავალება 4

num1 = 5
print(num1 >= 1 and num1 <= 10)
print(num1 > 5 and num1 < 10)
print(num1 > 3 and num1 > 15)
print(num1 < 2 and num1 > 9)
print(num1 <= 5 and num1 >= 12)

print(num1 >= 1 or num1 <= 10)
print(num1 > 5 or num1 < 10)
print(num1 > 3 or num1 > 15)
print(num1 < 2 or num1 > 9)
print(num1 <= 5 or num1 >= 12)

# დავალება 5

num2 = int(input("please enter first: "))
num3 = int(input("please enter second: "))

print(num2 > num3)
print(num2 < num3)
print(num2 == num3)
print(num2 >= num3)
print(num2 <= num3)