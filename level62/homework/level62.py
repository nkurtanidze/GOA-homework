def check_input():
    user_input = input("შეიყვანეთ ტექსტი: ")
    error_indices = []

    for index, char in enumerate(user_input):
        if char.isdigit():
            error_indices.append(index)

    if error_indices:
        print("ერორი: ტექსტში არის რიცხვები შემდეგ ინდექსებზე:", error_indices)
    else:
        print("წარმატებული ოპერაცია")

if __name__ == "__main__":
    check_input()
