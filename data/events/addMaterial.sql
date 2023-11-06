INSERT INTO [dbo].[material]
(
    [materialName],
    [materialDescription],
    [materialStartDate],
    [materialPrice]
)
VALUES
(
    @materialName,
    @materialDescription,
    @materialStartDate,
    @materialPrice
)

SELECT SCOPE_IDENTITY() AS materialId