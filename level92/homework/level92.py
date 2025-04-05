# davaleba 2
age = int(input("შეიყვანეთ თქვენი ასაკი: "))

# Ternary operator
result = "მეტია 18-ზე" if age > 18 else "მცირეწლოვანი"

print(result)



# davaleba 4
def compare_numbers(num1, num2):
    if num1 > num2:
        print(f"{num1} მეტია {num2}-ზე")
    elif num1 < num2:
        print(f"{num2} მეტია {num1}-ზე")
    else:
        print("Equal")
