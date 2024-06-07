print("enter number of tems")
rangeEnd = int (input())

for i in range(rangeEnd):
    num = i+1
    if num%2 ==0:
        print(num,"is even number")
    else:
        print(num, "is odd number")
        