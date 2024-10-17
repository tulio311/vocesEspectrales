import pandas as pd
import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('audios.db')
cursor = conn.cursor()

datos = pd.read_excel("Inventario - AVEs.xlsx").astype(str)

print(datos)

for i in range(len(datos)):

    tupla = tuple(datos.iloc[i,j] for j in range(13))

    print(tupla)

    cursor.execute("INSERT INTO audios VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", tupla)

    # Commit the changes to the database
    conn.commit()


cursor.close()
conn.close()



