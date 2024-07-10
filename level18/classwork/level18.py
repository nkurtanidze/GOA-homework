nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
copy_nums = nums[:5]
print(copy_nums)

copy_nums = nums[6:]
print(copy_nums)

copy_nums = nums[0:9:2]
print(copy_nums)

copy_nums = nums[3:7]
print(copy_nums)

copy_nums = nums[0:5]
print(copy_nums)

copy_nums = nums[4:9]
print(copy_nums)

copy_nums = nums[0:8]
print(copy_nums)

copy_nums = nums[1:7:2]
print(copy_nums)


name = "nika"
print(name[1:4])


string = ["nika", "luka"]
copy_string = string[::-1]
print(copy_string)


string = ["n", "i", "k", "a"]
copy_string = string[::-1]
print(copy_string)
print(string[0:4:2])


num = [1, 2, 3, 4, 5]
num[0:5:2] = [6, 7, 8]
print(num)


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.clear()
print(nums)


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums_copy = nums[:]
print(nums_copy)
print(nums)

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums_copy = nums.copy()
print(nums_copy)
print(nums)


name = ["nika", "luka"]
name1 = ["gio", "saba"]
name.extend(name1)
print(name)


name = ["nika", "luka"]
name.insert(2, "gio")
print(name)