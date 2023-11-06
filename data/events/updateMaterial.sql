UPDATE [dbo].[material]
SET [materialName] = @materialName,
    [materialDescription] = @materialDescription,
    [materialStartDate] = @materialStartDate,
    [materialPrice] = @materialPrice
WHERE [materialId] = @materialId


SELECT [materialId]
        ,[materialName]
        ,[materialDescription]
        ,[materialStartDate]
        ,[materialPrice]
FROM [dbo].[material]
WHERE [materialId]=@materialId