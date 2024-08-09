# davaleba 1

# upper ყველა ასოს სტრინგში გარდაქმნის დიდ ასოთ
name = "nika"
name = name.upper()
print(name)

name = "Luka"
name = name.upper()
print(name)

name = "Giorgi"
print(name.upper())

# lower ყველა ასოს სტრინგში გარდაქმნის პატარა ასოთ
name = "NIKA"
name = name.lower()
print(name)

name = "Luka"
name = name.lower()
print(name)

name = "GIORGI"
print(name.lower())


# capitalize მხოლოდ პირველი სტრინგის ასოს გარდაქმნის დიდათ
name = "NIKA"
name = name.capitalize()
print(name)

name = "luka"
name = name.capitalize()
print(name)

name = "GIORGI"
print(name.capitalize())




# davaleba 2

# append() სიის ბოლოში ამატებს ელემენტს
name = ["BMW", "mustang", "mercedes"]
name.append("nissan")
print(name)

name = ["nika", "luka", "ioane"]
name.append("gio")
print(name)

name = ["monkey", "girafe", "zebra"]
name.append("lion")
print(name)


# pop() შლის ელემენტს სიიდან ინდექსების მეშვეობით
name = ["BMW", "mustang", "mercedes"]
name.pop(2)
print(name)

name = ["nika", "luka", "ioane"]
name.pop(0)
print(name)

name = ["monkey", "girafe", "zebra"]
name.pop(1)
print(name)


# insert() კონკრეტულ ადგილას ამატებს ელემენტს ინდექსების მეშვეობით
name = ["BMW", "mustang", "mercedes"]
name.insert(2, "nissan")
print(name)

name = ["nika", "luka", "ioane"]
name.insert(0, "gio")
print(name)

name = ["monkey", "girafe", "zebra"]
name.insert(1, "lion")
print(name)