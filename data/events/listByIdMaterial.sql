SELECT [materialId]
        ,[materialName]
        ,[materialDescription]
        ,[materialStartDate]
        ,[materialPrice]
FROM [dbo].[material]
WHERE [materialId]=@materialId