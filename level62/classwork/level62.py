# davaleba 1
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # ბოლო i ელემენტი უკვე სორტირებულია
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # ელემენტების გაცვლა
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


# davaleba 2
def unique_elements(array1, array2):

    set1 = set(array1)
    set2 = set(array2)

    # პოულობს ელემენტებს, რომლებიც მხოლოდ ერთ-ერთ მასივშია
    unique_in_array1 = set1 - set2
    unique_in_array2 = set2 - set1

    # აერთიანებს შედეგებს და აბრუნებს როგორც სია
    return list(unique_in_array1.union(unique_in_array2))
# მაგალითი
array1 = [1, 2, 3, 4, 5]
array2 = [4, 5, 6, 7, 8]
result = unique_elements(array1, array2)
print(result)  # [1, 2, 3, 6, 7, 8]



# davaleba 3
def remove_elements(array1, array2):
    return [item for item in array1 if item not in array2]

# მაგალითი
array1 = [1, 2, 3, 4, 5]
array2 = [2, 4]
result = remove_elements(array1, array2)
print(result)  # [1, 3, 5]


