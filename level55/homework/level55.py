# davaleba 1
# მომხმარებლისთვის ორი რიცხვის შეყვანა
try:
    num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
    num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

    # მომხმარებლისთვის ოპერაციის არჩევა
    operation = input("მიუთითეთ ოპერაცია (მიმატება ან გამოკლება): ").strip()

    if operation == "მიმატება":
        result = num1 + num2
        print(f"შედეგი: {num1} + {num2} = {result}")
    elif operation == "გამოკლება":
        result = num1 - num2
        print(f"შედეგი: {num1} - {num2} = {result}")
    else:
        print("შეყვანილი ოპერაცია არასწორია. სცადეთ 'მიმატება' ან 'გამოკლება'.")
except ValueError:
    print("გთხოვთ, შეიყვანოთ მხოლოდ რიცხვები.")
