def find_unique_elements(arr):
    # ელემენტების რაოდენობა ითვლება
    counts = {}
    for element in arr:
        counts[element] = counts.get(element, 0) + 1
    
    # უნიკალური ელემენტების ფილტრაცია
    unique_elements = [element for element, count in counts.items() if count == 1]
    return unique_elements

input_array = [1, 2, 2, 3, 4, 4, 5]
result = find_unique_elements(input_array)
print(result)
