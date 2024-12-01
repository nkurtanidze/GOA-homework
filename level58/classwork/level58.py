# A, B და C ცვლადების მნიშვნელობები
A = True   # A-ს მინიჭებულია 1
B = True   # B-ს მინიჭებულია 0
C = False  # C-ს მინიჭებულია 0

# ა) (A and not B) or (B and not A)
result_a = (A and not B) or (B and not A)

# ბ) (B and C) and (A or B)
result_b = (B and C) and (A or B)

# გ) (A and not C) or (B and not A) or (B and not C)
result_c = (A and not C) or (B and not A) or (B and not C)

# შედეგების დაბეჭდვა
print("ა) შედეგი:", result_a)
print("ბ) შედეგი:", result_b)
print("გ) შედეგი:", result_c)
