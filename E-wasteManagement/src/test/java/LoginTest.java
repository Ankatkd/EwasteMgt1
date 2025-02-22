import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class LoginTest {
    WebDriver driver;

    @BeforeClass
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/loginn"); // React App URL
    }

    @Test
    public void testLogin() {
        WebElement email = driver.findElement(By.id("email"));
        WebElement password = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.id("loginBtn"));

        email.sendKeys("test@example.com");
        password.sendKeys("password123");
        loginButton.click();

        WebElement successMsg = driver.findElement(By.id("successMsg"));
        assert successMsg.getText().contains("Welcome");
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}
