# # davaleba 1
# # for loop
# # 1
# for i in  range(0, 21):
#     print(i)

# # 2
# for i in range(1, 10):
#     print(i)

# # 3
# for i in range(0, 101, 2):     # luwi
#     print(i)

# for i in range(1, 101, 2):    # kenti
#     print(i)


# # 4
# age = 10
# sum = 0
# for i in range(0, 10):
#     sum = sum + i
#     print(sum)


# # 5
# for i in range(5, 51, 5):
#     print(i)





# # while loop
# # 1
# age = 0
# while age < 20:
#     print(age)
#     age += 2


# # 2
# age = 1
# some = 0
# while age < 10:
#     some = some + age
# print(some)


# # 3
# number = 7
# user_number = None
# while user_number != number:
#     user_number = int(input("please enter number"))
#     if user_number == number:
#         print("you win !")
#     else:
#         print("please try again")


# # 5
# password = "password123"
# user_password = None
# while user_password != password:
#     user_password = input("please enter password")
#     if user_password == password:
#         print("you win !")
#     else:
#         print("please try again")




# # if - else
# # 1
# clock = 12
# if clock < 12:
#     print("good morning")
# else:
#     print("good afternoon")


# # 2
# num = 45
# if num % 2 == 0:
#     print("even")
# else:
#     print("odd")


# # 3
# temperature = 30
# if temperature > 30:
#     print("hot outside !")
# else:
#     print("it's not to hot !")


# # 4
# age = 13
# if 13 < age < 19:
#     print("you are a teenager")
# else:
#     print("you are not a teenager")




# # davaleba 2
# # for loop
# # 1
# sum = 0 
# for i in range(1, 10):
#     sum = sum + i
# print(sum)


# # 2
# for i in range(1, 15):
#     print(i**2)


# # 3
# sum = 0
# for i in range(1, 5):
#     sum = sum + i**2
# print(sum)


# # 4
# for i in range(1, 101):
#     if i % 3 == 0 and i % 5 == 0:
#         print(i)


# # 5
# for i in range(10, 0, -1):
#     print(i)



# while loop
# 1
# num = int(input("please enter num"))
# num2 = 1
# sum = 0
# while num2 < num:
#     sum = sum + num2
#     num2 = num2 + 1
# print(sum)


# # 2
# num = 10
# while num > 1:
#     num = num - 1
#     print(num)


# # 3
# sum = 0
# num = 1
# while num < 100:
#     sum = sum + num
#     num = num + 1
# print(sum)



# # 4
# num = 1
# while num < 10:
#     print(num**2)
#     num = num + 1


# # if - else
# # 1
# year = 2008
# if year % 4 == 0:
#     print("YES")
# else:
#     print("NO")

# # 2
# user_word = input("please enter word: ")
# if user_word == user_word[::-1]:
#     print("it is palendrom")
# else:
#     print("it is not palendrom")


# # 3
# user_number = int(input("please enter number"))
# if user_number > 0:
#     print("positive")
# elif user_number == 0:
#     print("zero")
# else:
#     print("negative")


# 4
height = 176
weight = 110
if weight< 185:
    print("underweight")