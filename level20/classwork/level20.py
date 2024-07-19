def greet():
    print("hello nika")

greet()

def add():
    print(1+2)

add()


def add(num1, num2, operation):
    if operation == "+":
      print(num1 + num2)
    elif operation == "-":
      print(num1 - num2)
    elif operation == "*":
      print(num1 * num2)
    elif operation == "/":
      print(num1 / num2)
    else:
       print("invalid operation")

add(5, 5, "+")
add(7, 3, "-")
add(4, 6, "*") 
add(10, 5, "/")


def add(num1, num2, operation):
    result = 0
    if operation == "+":
      result = num1 + num2
    elif operation == "-":
      result = num1 - num2
    elif operation == "*":
      result = num1 * num2
    elif operation == "/":
      result = num1 / num2
    else:
       result = "invalid operation"
       return result
print(add(5, 5, "+"))
print(add(7, 3, "-"))
print(add(4, 6, "*"))
print(add(10, 5, "/"))


num = [1, 2, 3, 4, 5]
for i in num:
   if i % 2 == 0:
      num.append(i)