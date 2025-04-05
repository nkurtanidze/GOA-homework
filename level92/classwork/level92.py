# davaleba 1
num = int(input("შეიყვანეთ რიცხვი: "))
print("Two" if num % 2 == 0 else num)



# davaleba 2
number = int(input("შეიყვანე რიცხვი: "))
result = number * 8 if number % 2 == 0 else number * 9
print("შედეგი:", result)




# davaleba 4
import random

def get_random_element(arr):
    return random.choice(arr)
