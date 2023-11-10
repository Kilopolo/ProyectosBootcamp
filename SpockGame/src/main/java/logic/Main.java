package logic;

public class Main {

	public static void main(String[] args) {

		Game g = new SpockGame();
		try {
			g.run();
		} catch (Exception e) {
			
			e.printStackTrace();
			System.out.println("\n\r"+e.getMessage());
		}
		
	}

}
