def even_list(number_list):
    res_list = []
    for num in number_list:
        if num % 2 == 0:
            res_list.append(num)
    return res_list

print(even_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


def string_func(string_list):
    res_list = []
    for string in string_list:
        if len (string) <4:
            res_list.append(string)
    return res_list
print(string_func(["hello", "goa", "123", "nika", "func"]))


def number(list):
    int_nums = []
    for num in list:
        if num == int(num):
            number.append(num)
            return int_nums
        list[1, 2, 3.4, 4, 5, 6.7]

print(number(list))