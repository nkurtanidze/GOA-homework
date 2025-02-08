# davaleba 1
def sum_digits(n):
    n = abs(n)  # უარყოფითი რიცხვებისთვის ვხმარობთ აბსოლუტურ მნიშვნელობას
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  # აქ `n` განახლდება
    return result

print(sum_digits(123))   # მოსალოდნელი შედეგი: 6 (1 + 2 + 3)
print(sum_digits(405))   # მოსალოდნელი შედეგი: 9 (4 + 0 + 5)
print(sum_digits(-789))  # მოსალოდნელი შედეგი: 24 (7 + 8 + 9)

# davaleba 2
def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)  # პირველი უდიდესი რიცხვის მოცილება სიიდან
    max2 = max(lst)   # მეორე უდიდესი რიცხვის პოვნა

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  # 16 (9 + 7)
print(sum_two_largest([10, 10, 5, 3]))   # 20 (10 + 10)