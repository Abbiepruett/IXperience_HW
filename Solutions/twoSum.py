class Solution(object):

    nums = [2,7,11,15]
    target = 9

    def twoSum( nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        complementMap = dict()

        for i in range(len(nums)):
            num = nums[i]
            complement = target - num
            
            if num in complementMap:
                return [complementMap[num], i]
            else:
                complementMap[complement] = i


    answer = twoSum(nums, target)
    print("The answer is: " + str(answer))


   
    

        