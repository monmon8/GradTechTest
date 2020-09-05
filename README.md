## Small breakdown of my thought process:

1. create a variable to store the result
2. map through data
3. split each string at the first '/'
4. handle edge case for parents with no children
5. check for pre-existing parent in the result array
6. if the parent exists, then push the child into the data array
7. if the parent doesn't exist, then create the parent and add the child into a new data array
