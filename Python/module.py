# module
# Python에는 많은 module들이 내장되어 있다.
# import math

# print(math.ceil(1.2))
# print(math.fabs(-1.2))

# 사용할 module만 가져오는 것이 좋다.
# from math import ceil, fsum
 
# print(ceil(1.2))
# print(fsum([1, 2, 3, 4, 5, 6, 7]))

# 사용할 module의 이름을 변경할 수 있다.
# from math import fsum as sexy_sum

# print(sexy_sum([1, 2, 3, 4, 5, 6, 7]))

# 다른 파일에 정의된 기능을 import해서 사용할 수 있다.
from challenge import plus, minus

print(plus(1, 2), minus(1, 2))

