# 3) შექმენით ფუნქცია რომესაც პარამეტრად გადაეცემა string-ების სია, საბოლოოდ კი აბრუნებს ყველაზე გრძელ სიტყვას სიიდან
def string_func(string_list):
    res_list = []
    for string in string_list:
        if len(string) >3:
            res_list.append(string)
    return res_list

print(string_func(["nika", "goa", "hello", "123"]))


# 4) შექმენით ფუნქცია რომელიც მიიღებს მთელი რიცხვების სიას, ლუწ რიცხვებს გაამრავლებს თავის თავზე, კენტებს კი 2-ზე შემდეგ ჩაამატებს ახალ სიაში, საბოლოოდ კი დააბრუნებს ახალ სიას
def intejer_nums(list):
    int_nums = []
    

print(intejer_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))