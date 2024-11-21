# davaleba 1
masivi = [10, 20, 30, 40, 50]

num_1 = masivi[2]  
num_2 = masivi[4]  

print("მე-2 ინდექსზე მყოფი ელემენტი:", num_1)
print("მე-4 ინდექსზე მყოფი ელემენტი:", num_2)




# davaleba 2
N = int(input("შეიყვანეთ ელემენტების რაოდენობა: "))
a = []
for i in range(N):
    num = int(input(f"შეიყვანეთ ელემენტი #{i+1}: "))
    a.append(num)

print("კენტ ინდექსზე მყოფი ელემენტები:")
for i in range(1, N, 2):
    print(a[i])


# davaleba 3
numbers = []

for i in range(10):
    num = int(input(f"შეიყვანეთ {i + 1}-ე რიცხვი: "))
    numbers.append(num)

doubled_numbers = [num * 2 for num in numbers]

print("გაორმაგებული რიცხვები:")
for num in doubled_numbers:
    print(num)


# davaleba 4
N = int(input("შემოიყვანეთ რიცხვების რაოდენობა: "))

numbers = []
print("შემოიყვანეთ რიცხვები:")
for _ in range(N):
    number = int(input())
    numbers.append(number)

reversed_numbers = numbers[::-1]
print("შებრუნებული რიცხვები:")
print(", ".join(map(str, reversed_numbers)))



# davaleba 5
N = int(input("შეიყვანეთ ელემენტების რაოდენობა (N): "))
print("შეიყვანეთ", N, "რიცხვი ცალ-ცალკე ხაზზე:")
arr = []

for _ in range(N):
    num = int(input())
    arr.append(num)

if N > 1:
    arr[0], arr[-1] = arr[-1], arr[0]

print("შეცვლილი მასივი:", arr)
