# davaleba 1
def manual_filter(array, items_to_remove):
    # ვამოწმებთ, რომ items_to_remove იყოს სია
    if not isinstance(items_to_remove, list):
        items_to_remove = [items_to_remove]
    
    # ვაბრუნებთ იმ ელემენტებს, რომლებიც არ შედის items_to_remove-ში
    return [item for item in array if item not in items_to_remove]




# davaleba 2
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    
    return arr
