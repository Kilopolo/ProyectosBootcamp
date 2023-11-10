package logic;

import java.util.Random;

public class AIEnemy implements Enemy {

	@Override
	public int getFigure() {
		Random random = new Random();
	    int randomNumber = random.nextInt(5); // 0, 1, 2, 3, o 4 para representar las figuras.
	    return randomNumber;
	}

}
