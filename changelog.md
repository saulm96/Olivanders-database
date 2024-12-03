2024/11/23
Generated the ER diagram for the database without the multilingual support relations.

2024/11/24
Generated the database of the proyect and added the tables for the translations.
Made all the relations for the database. Insert are still pending to do.

2024/11/25
Made the insert and fixed a few problems related with the scripts and started working on the app main structure.

2024/11/26
Dockerized the backend

2024/11/27
Installed sequalize and started working on the models

2024/11/28
Finished models started working on the CRUD

2024/11/29
Fixed the relations of the sequalize and made all the basics functions for the CRUD

2024/11/30
Reorganized the json response. Also created a new folder called cleaner to clean and order all the jsons.

###0.1
For now the API can show you four different endpoints:
    - Users ("user/list" with the list of all users in the database)
            ("user/ID" replace ID with the user id you are looking for)

    -wands  ("wand/list" for the list of all wands in the database) 
            ("wand/ID" replace ID with the wand id you are looking for)

    -cores  ("core/list" for the list of all existing wand cores in the database)
            ("core/ID" replace ID with the wand core id you are looking for")

    -woods  ("wood/list" for the list of all existing wand woods in the database)
            ("wand/ID" replace ID with the wood id you are looking for")

    -wandmakers ("wandmaker/list" for the list of all existing wandmakers in the database)
                ("wandmaker/ID" replace ID with the wandmaker id you are looking for)