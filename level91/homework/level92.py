# davaleba 3
from collections import deque

# ცარიელი კონტეინერი (deque ტიპის)
container = deque()

# მომხმარებლის მიერ შეყვანილი რიცხვი
number = int(input("შეიყვანე რიცხვი: "))

# ლოგიკა
if number > 20:
    container.append(number)  # ბოლოში დამატება
else:
    container.appendleft(number)  # თავში დამატება

print("კონტეინერი:", list(container))
