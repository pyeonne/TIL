# age = "18"
# print(age)
# print(type(age))
# n_age = int(age)
# print(n_age)
# print(type(n_age))

# Python에서는 function을 만드는 것이 아니라 define(정의)한다고 한다.
# '{}'를 사용하지 않고 들여쓰기로 function의 안(body)이라는 걸 표시할 수 있다.
# 들여쓰기를 통해 function의 body 안에 작성하지 않으면 올바르게 작동하지 않는다.
# def say_hello(who):
#     print("hello", who)
#     print("bye")

# say_hello("Nicolas")

# def plus(a, b):
#     print(a + b)

# 인자를 하나만 전달하면 오류가 발생한다.
# 인자에 기본값을 설정하면 하나만 전달해도 오류가 발생하지 않는다.
# def minus(a, b=0):    
#     print(a - b)

# plus(2, 5)
# minus(2)

# def say_hello(name="annoymous"):
#     print("hello", name)

# say_hello()
# say_hello("nico")

# def p_plus(a, b):
#     print(a + b)

# def r_plus(a, b):
#     return a + b
#     print("alalalalalall", True)

# p_result = p_plus(2, 3)
# r_result = r_plus(2, 3)

# print(p_result, r_result) # None 5

# r_result = r_plus(2, 4)

# function은 오직 한 번에 하나의 값만 return 할 수 있다.
# return 밑에 작성된 구문은 작동되지 않는다.
# print(r_result) # 6

# Positional Argument - 위치에 의존적인 인자
# Keyword Argument - 위치에 따라 정해지는 것이 아닌 argument의 이름으로 쌍을 이룬다.

# keyword Argument는 전달하는 인자의 순서는 상관없다.
# result = r_plus(b=30, a=1)
# print(result)

# string 안에 변수를 포함시키고 싶으면
# string 앞에 f(format)를 붙이고 변수명을 '{}'로 감싸주면 된다.
def say_hello(name, age, age_from, fav_food):
    return f"Hello {name} you are {age} years old you are from{age_from} you like {fav_food}"

hello = say_hello(name="nico", age="12", fav_food="kimchi", age_from="korea")
print(hello)