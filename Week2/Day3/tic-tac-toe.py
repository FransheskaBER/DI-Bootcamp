# MINI-PROJECT - TIC TAC TOE


# Instructions:
# Tic Tac Toe is played on a 3x3 grid. Players take turns marking empty squares with their symbol (‘O’ or ‘X’). The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins. If all squares are filled and no player has three in a row, the game is a tie.



# Step 1: Representing the Game Board

# You’ll need a way to represent the 3x3 grid.
# A list of lists (a 2D list) is a good choice.
# Initially, each cell in the grid should be empty (e.g., represented by a space ‘ ‘).

board = [[' ', ' ', ' '],
         [' ', ' ', ' '],
         [' ', ' ', ' ']] 

# Step 2: Displaying the Game Board

# Create a function called display_board() to print the current state of the game board.
# The output should visually represent the 3x3 grid.
# Think about how to format the output to make it easy to read.
# To join two strings, use .join() method. For example:
# letters = ['H', 'I']
# word = '|'.join(letters) # the | is a glue so the output would be H|I or with ' | ' = H | I
# print(word)

def display_board():
    print('  1 2 3')
    row_labels = ['A ', 'B ', 'C ']
    for row in range(3):
        print(f'{row_labels[row]}' + '|'.join(board[row]))
        if row < 2:
            print('--------')

# Step 3: Getting Player Input

# Create a function called player_input(player) to get the player’s move.
# The function should ask the player to enter a position (e.g., row and column numbers).
# Validate the input to ensure it’s within the valid range and that the chosen cell is empty.
# Think about how to ask the user for input, and how to validate that input.

def player_input(player):
    position = {
        "A1":(0, 0),"A2":(0, 1),"A3":(0, 2),
        "B1":(1, 0),"B2":(1, 1),"B3":(1, 2),
        "C1":(2, 0),"C2":(2, 1),"C3":(2, 2),
        }
    while True:
        move = input('Enter a position you want to take in the board (like A1 or A2, etc..): ').upper()
        if move == "EXIT":
            return "EXIT"
        elif move not in position:
            print("That's not a valid position. Try again.") 
            continue #go back to the start of the loop
        row, col = position[move] #"Look at the move and look for it (like B2) in the position dictionary, and split the result into two values: one for the row, and one for the column.
        if board[row][col] != " ":
            print("That spot is already taken. Choose another one.")
        else:
            board[row][col] = player
            display_board()
            break

# Step 4: Checking for a Winner

# Create a function called check_win(board, player) to check if the current player has won.
# The function should check all possible winning combinations (rows, columns, diagonals).
# If a player has won, return True; otherwise, return False.
# Think about how to check every possible winning combination.

def check_winner(board, player):
    for row in board:
        if all(cell == player for cell in row):
            return True
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    if board[0][0] == board [1][1] == board[2][2] == player:
        return True
    if board[0][2] == board [1][1] == board[2][0] == player:
        return True
    return False

# Step 5: Checking for a Tie

# Create a function to check if the game has resulted in a tie.
# The function should check if all positions of the board are full, without a winner.

def check_tie(board):
    for row in board:
        if ' ' in row:
            return False
    return True
        
# Step 6: The Main Game Loop

# Create a function called play() to manage the game flow.
# Initialize the game board.
# Use a while loop to continue the game until there’s a winner or a tie.
# Inside the loop:
# Display the board.
# Get the current player’s input.
# Update the board with the player’s move.
# Check for a winner.
# Check for a tie.
# Switch to the next player.
# After the loop ends, display the final result (winner or tie).


def play():
    #first let's reset the board so everytime the game will start with a clean board
    for row in range(3):
        for col in range(3):
            board[row][col] = " "
    #set who is going to start the game
    player = "X"
    #let's print a welcome message
    print("Welcome to Tic Toc Toe game!")
    print("Type 'EXIT' anytime to quit the game")
    display_board()

    while True:
        result = player_input(player)
        if result == "EXIT":
            print("Goodbye.")
            break
        if check_winner(board, player):
            print(f"Congrats! Player {player} wins!")
            break
        if check_tie(board):
            print("It's a tie!")
            break
        if player == "X":
            player = "Y"
        else:
            player = "X"

play()


        



# while not winner:
#     if player_input('X') == "EXIT":
#         print('Goodbye')
#         break
#     if player_input('Y') == "EXIT":
#         print('Goodbye')
#         break
