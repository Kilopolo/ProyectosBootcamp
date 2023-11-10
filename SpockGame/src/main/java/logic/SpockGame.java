package logic;

import java.time.LocalDate;

import persistence.Manager;

public class SpockGame implements Game {

	
	private Output out = new Output();
	private boolean salir = false;
	private Enemy ai;
    private History history;
	
	private SpockRules sr;
	
	public SpockGame() {
		this(new AIEnemy());
	}

	public SpockGame(Enemy ai) {
		super();
		this.ai = ai;
		sr = new SpockRules();
		history = new History();
	}

	@Override
	public void run() {

		while (!salir) {
			out.printMenu();

			
			
			Item fig = out.parseAnswerToFigure(out.getUserInput());
			Item fig2 = out.parseAnswerToFigure(ai.getFigure());
			Result result = sr.getResultOf(fig,fig2);
			
			out.printResult(result);
			 
			history.addToHistory(result);
			
			
			out.printMenuPostGame(history);

			
			history.saveAllData();
			
			salir = out.askSalir();

		}

	}





}
