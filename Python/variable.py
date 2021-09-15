# 1. Variable types
# number, float, string, boolean, None
# float과 number는 다르다.
# Python에서는 boolean의 첫 글자를 대문자로 사용한다.
# None은 '존재하지 않음'을 의미하며, JS의 null과 비슷한 개념이다.
# Python에서는 snake case를 사용한다. e.g. super_long_variable
a_string = 'like this'
a_number = 3
a_float = 3.12
a_boolean = False
a_none = None

# 2. Sequence type
# list - mutable sequence type
# days = ["Mon", "Tue", "Wed", "Thur", "Fri"]
# print("Mon" in days) # True
# print(days[3]) # Thur
# print(len(days)) # 5
# print(days)
# days.append("Sat")
# days.reverse()
# print(days)

# tuple - immutable sequence type
# common sequence operation들만 사용 가능하다.
# days = ("Mon", "Tue", "Wed", "Thur", "Fri")
# print(type(days))

# Dictionary
# Dictionary 안에 list 혹은 tuple도 저장할 수 있다.
nico = {
    "name": "Nico",
    "age": 29,
    "korean": True,
    "fav_food": ["Kimchi", "Sashimi"]
}

print(nico)
nico["hansome"] = True
print(nico)