import pandas as pd
import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('audios.db')
cursor = conn.cursor()

datos = pd.read_excel("Inventario - AVEs.xlsx").astype(str)

paises = ['Argentina','Costa Rica','Chile','Colombia','Perú','México']
ciudades = ['Buenos Aires','Santa Fe','Rosario','Delta de Tigre','San José','Turrialba', 'Comunidad Alto Pacuare', 'Cártago','Santiago', 'Valparaíso','Bogotá', 'Bucaramanga', 'Medellín','Qosqo', 'Lima','Coyoacán']


for i in range(len(datos)):

    for p in paises:
        if p in datos.loc[i,'Lugar'] or p in datos.loc[i,'Col5']:
            cursor.execute("UPDATE audios SET pais = '" + p + "' WHERE AudioName = '" + datos.loc[i,'AudioName'] + "';")
            conn.commit()
            break

    for c in ciudades:
        if c in datos.loc[i,'Lugar'] or c in datos.loc[i,'Col5']:
            cursor.execute("UPDATE audios SET ciudad = '" + c + "' WHERE AudioName = '" + datos.loc[i,'AudioName'] + "';")
            conn.commit()
            break


cursor.close()
conn.close()
