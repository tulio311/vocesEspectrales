import pandas as pd

datos = pd.read_excel("Inventario - AVEs.xlsx").astype(str)

tags = []

for i in range(len(datos)):

    tags1 = datos.loc[i,'Col5'].split(",")
    finalTags = [s.strip() for s in tags1]

    for tag in finalTags:

        if tag in tags:
            pass
        else:
            tags.append(tag)


print(tags)




