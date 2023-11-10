package logic;

import java.util.List;
import java.util.Scanner;

public class Output {
	private Scanner teclado = new Scanner(System.in);

	public void printMenu() {
		System.out.println("Juguemos a Spock, Lizard, Scissors!");
		System.out.println("Elige tu jugada:");
		System.out.println("0. Piedra");
		System.out.println("1. Papel");
		System.out.println("2. Tijeras");
		System.out.println("3. Spock");
		System.out.println("4. Lagarto");
		System.out.println("5. Salir");
	}

	public int getUserInput() {
		int choice = teclado.nextInt();
		teclado.nextLine(); // Consumir la nueva línea en el búfer
		return choice;
	}

	public Item parseAnswerToFigure(int  userInput) {
	    switch (userInput) {
        case 0:
            return Item.ROCK;
        case 1:
            return Item.PAPER;
        case 2:
            return Item.SCISSORS;
        case 3:
            return Item.SPOCK;
        case 4:
            return Item.LIZARD;
        default:
            return null; // Maneja errores aquí si es necesario
    }
	}

	public void printResult(Result result) {
		System.out.println("Resultado: " + result.toString());
		System.out.println("You "+ result.getGameResult());
		System.out.println();
	}

	public boolean askSalir() {
		System.out.println("¿Quieres salir del juego? (5 para salir / 0-4 para continuar)");
	    int choice = getUserInput();
	    return choice == 5;
	}

	public void showLastGame(History history) {
	    String lastGame = history.getLastGame();
	    if (lastGame != null) {
	        System.out.println("Último juego: " + lastGame.toString());
	    } else {
	        System.out.println("Aún no se ha jugado ningún juego.");
	    }
	}

	public void showBestStreak(History history) {
	    int bestStreak = history.getBestStreak();
	    if (bestStreak > 0) {
	        System.out.println("Mejor racha: " + bestStreak + " juegos ganados consecutivos.");
	    } else {
	        System.out.println("Todavía no se ha registrado una racha ganadora.");
	    }
	}

	public void printMenuPostGame(History history) {
	    Scanner scanner = new Scanner(System.in);
	    
	    while (true) {
	        System.out.println("Menú Post Juego");
	        System.out.println("1. Mostrar el último juego");
	        System.out.println("2. Mostrar la mejor racha");
	        System.out.println("3. Mostrar todos los juegos");
	        System.out.println("4. Volver al menú principal");
	        System.out.println("Seleccione una opción (1/2/3/4): ");
	        
	        int choice = scanner.nextInt();
	        scanner.nextLine();  // Consumir la nueva línea en el búfer
	        
	        switch (choice) {
	            case 1:
	                showLastGame(history);
	                break;
	            case 2:
	                showBestStreak(history);
	                break;
	            case 3:
	                showAllGames(history);
	                break;
	            case 4:
	                return;  // Salir del menú
	            default:
	                System.out.println("Opción inválida. Intente de nuevo.");
	                break;
	        }
	    }
	}

	public void showAllGames(History history) {
	    List<Result> results = history.getResults();
	    
	    if (results.isEmpty()) {
	        System.out.println("No se han jugado juegos todavía.");
	        return;
	    }
	    
	    System.out.println("Historial de juegos:");
	    
	    for (Result result : results) {
	        System.out.println(result.getGameResult() + " - Resultado: " + result.toString());
	    }
	}
}
