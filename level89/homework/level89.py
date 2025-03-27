# davaleba 1
# მომხმარებლისგან სტრინგი და ინდექსების მიღება
user_string = input("შეიტანეთ სტრინგი: ")
start_index = int(input("შეიტანეთ დასაწყისი ინდექსი: "))
end_index = int(input("შეიტანეთ დასასრული ინდექსი: "))

# slicing-ის გამოყენებით ამოჭრა სტრინგის
sliced_string = user_string[start_index:end_index]

print("ამოჭრილი სტრინგი:", sliced_string)




# davaleba 4
def reverse_words(sentence):
    # სიტყვების გაყოფა
    words = sentence.split()
    # თითოეული სიტყვის შემოტრიალება და მათ სიაში დაბრუნება
    reversed_words = [word[::-1] for word in words]
    # სიტყვების გაერთიანება მათ ახალ რიგში
    return ' '.join(reversed_words)

# შეტყობინების მიღება
input_sentence = input("მიუთითეთ წინადადება: ")
print(reverse_words(input_sentence))
