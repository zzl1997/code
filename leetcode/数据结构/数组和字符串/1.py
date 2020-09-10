class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        S=sum(nums)
        for i in range(0,len(nums)):
            s1=sum(nums[0:i])
            if s1==S-s1-nums[i]:
                return i
            else:
                return -1
demo=Solution()
print(demo.pivotIndex([1, 2, 3]))