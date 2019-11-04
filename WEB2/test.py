# print("입력받을 숫자 개수를 입력하세요")
# num = int(input())

# num_list=[]
# print("%d개의 수를 입력하세요" %(num))
# num_list += input(num_list.remove)
# print(num_list)

# if len([i for i in num_list if i != ' ']) != num:
#     print("%d개의 수를 입력해주세요." %(num))
# else:
#     print(num_list)




# for i in range(num):
#     num_list += input()



###############
num = input()
nums = ""
nums += num
num_list = nums.split()

if len(num_list) != num:
    print("%s개의 수를 입력하세요" %(num))
else:
    print(num_list)